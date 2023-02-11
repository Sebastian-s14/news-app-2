import './CardListImage.scss'

interface CardListImageProps {
  images: string[]
}

export const CardListImage = ({ images }: CardListImageProps) => {
  return (
    <div className="cardListImage__container">
      {images.map((image, index) => (
        <img key={index} src={image} alt="image " />
      ))}
    </div>
  )
}
