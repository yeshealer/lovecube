import base64 from 'base-64'

export const useImageURI = (
    occasion,
    toFirstName,
    inscription
) => {
    let firstLine = ''
    let secondLine = ''
    if (inscription.length < 12) {
        firstLine = inscription
    } else {
        const words = inscription.split(' ')
        for (let i = 0; i < words.length; i++) {
            if (!(firstLine.length >= inscription.length * 1 / 3 && firstLine.length <= inscription.length / 2)) {
                firstLine = firstLine + ' ' + words[i]
            } else {
                secondLine = secondLine + ' ' + words[i]
            }
        }
    }
    const SVGToken =
        '<svg id="et067cxwz2i1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><style></style><rect width="900" height="900" rx="50" ry="50" transform="translate(50 50)" fill="#872c2d" stroke-width="0"/><rect width="850" height="850" rx="40" ry="40" transform="translate(75 75)" fill="#fff" stroke-width="0"/><rect width="830" height="830" rx="35" ry="35" transform="translate(85 85)" fill="#872c2d" stroke-width="0"/><text x="50%" y="25%" font-family="Ubuntu" dominant-baseline="middle" text-anchor="middle" font-size="90" font-weight="600" fill="#fff" stroke-width="0"><![CDATA[' + firstLine + ']]></text><text x="50%" y="36%" dominant-baseline="middle" text-anchor="middle" font-size="90" font-weight="600" fill="#fff" stroke-width="0"><![CDATA[' + secondLine + ']]></text><text x="46%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="36" font-weight="400" fill="#fff" stroke-width="0"><![CDATA[ To: ]]></text><text x="54%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40" font-weight="500" font-style="italic" fill="#fff" stroke-width="0"><![CDATA[' + toFirstName + ']]></text><rect width="500" height="80" rx="50" ry="50" x="250" y="71%" dominant-baseline="middle" fill="#fff" stroke-width="0"/><text x="50%" y="75.5%" dominant-baseline="middle" text-anchor="middle" font-size="45" font-weight="500" fill="#872c2d" stroke-width="0"><![CDATA['
        + occasion + "]]></text></svg>"
    const encodedSVG = base64.encode(SVGToken)
    const resultSVG = 'data:image/svg+xml;base64,' + encodedSVG

    return resultSVG
}

export const createImage = (url) =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', (error) => reject(error))
        image.setAttribute('crossOrigin', 'anonymous')
        image.src = url
    })

export function getRadianAngle(degreeValue) {
    return (degreeValue * Math.PI) / 180
}

export function rotateSize(width, height, rotation) {
    const rotRad = getRadianAngle(rotation)

    return {
        width:
            Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height:
            Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    }
}


export async function getCroppedImg(
    imageSrc,
    pixelCrop,
    rotation = 0,
    flip = { horizontal: false, vertical: false }
) {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
        return null
    }

    const rotRad = getRadianAngle(rotation)

    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
        image.width,
        image.height,
        rotation
    )

    canvas.width = bBoxWidth
    canvas.height = bBoxHeight

    ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
    ctx.rotate(rotRad)
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
    ctx.translate(-image.width / 2, -image.height / 2)

    ctx.drawImage(image, 0, 0)

    const data = ctx.getImageData(
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height
    )

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    ctx.putImageData(data, 0, 0)

    return new Promise((resolve, reject) => {
        canvas.toBlob((file) => {
            resolve(URL.createObjectURL(file))
        }, 'image/jpeg')
    })
}
