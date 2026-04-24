import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

const client = createClient({
  projectId: '7i6o6fr5',
  dataset: 'production',
  apiVersion: '2024-04-24',
  token: 'sklSb1F0miCLwohzcR7SreuVQz6w5zBY22LrEcN2tcxnHh42veUl5N1cG23NzPUGLurKBv15pqg5oyG3clQUbC0drPiDbHTqgSAEIBpsG1bDjUcT3S4hlZdcR9VfMReM04f6kZUtYRtVa4e632CgSUznvnjHSJTckQRKw65FElZDZLw4XA3Y',
  useCdn: false,
})

const products = JSON.parse(fs.readFileSync('./src/data/products.json', 'utf8'))

async function uploadImage(url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data)
    const asset = await client.assets.upload('image', buffer, {
      filename: path.basename(url),
    })
    return asset._id
  } catch (error) {
    console.error('Failed to upload image:', url, error.message)
    return null
  }
}

async function migrate() {
  console.log('Starting migration...')
  for (const product of products) {
    console.log(`Migrating: ${product.name}`)
    
    let imageAssetId = null
    if (product.image) {
      imageAssetId = await uploadImage(product.image)
    }

    const doc = {
      _type: 'product',
      _id: product.id,
      name: product.name,
      slug: {
        _type: 'slug',
        current: product.id,
      },
      price: product.price,
      rating: product.rating,
      category: product.category,
      description: product.description,
      isLimited: product.isLimited || false,
      isHot: product.isHot || false,
      specs: Object.entries(product.specs || {}).map(([label, value]) => ({
        _key: Math.random().toString(36).substring(2, 9),
        label: label.charAt(0).toUpperCase() + label.slice(1),
        value: value,
      })),
    }

    if (imageAssetId) {
      doc.image = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAssetId,
        },
      }
    }

    await client.createOrReplace(doc)
    console.log(`✅ Success: ${product.name}`)
  }
  console.log('Migration complete!')
}

migrate()
