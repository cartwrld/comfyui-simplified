import * as fs from 'fs'
import * as path from 'path'

// Define the source and destination paths
const sourcePath = 'D:/ComfyUI/ComfyUI/output/yourfile.ext' // Replace 'yourfile.ext' with your file name and extension
const destPath = path.join(__dirname, 'src/images/yourfile.ext') // Ensure your project structure matches this path

// Function to copy the file
const copyFile = (src: string, dest: string): void => {
  fs.copyFileSync(src, dest)
  console.log(`File copied from ${src} to ${dest}`)
}

// Execute the copy function
copyFile(sourcePath, destPath)
