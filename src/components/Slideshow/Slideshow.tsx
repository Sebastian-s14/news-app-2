import './Slideshow.scss'

interface SlideshowProps {
  images: string[]
}

export const Slideshow = ({ images }: SlideshowProps) => {
  //   let slideIndex = 1
  //   // showSlides(slideIndex)

  //   function plusSlides(n: number) {
  //     showSlides((slideIndex += n))
  //   }

  //   function currentSlide(n: number) {
  //     showSlides((slideIndex = n))
  //   }

  //   function showSlides(n: number) {
  //     let i
  //     const slides = document.getElementsByClassName(
  //       'mySlides',
  //     ) as HTMLCollectionOf<HTMLElement>
  //     const dots = document.getElementsByClassName(
  //       'demo',
  //     ) as HTMLCollectionOf<HTMLElement>
  //     const captionText = document.getElementById('caption')
  //     if (n > slides.length) {
  //       slideIndex = 1
  //     }
  //     if (n < 1) {
  //       slideIndex = slides.length
  //     }
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = 'none'
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(' active', '')
  //     }
  //     slides[slideIndex - 1].style.display = 'block'
  //     dots[slideIndex - 1].className += ' active'
  //     captionText && (captionText.innerHTML = dots[slideIndex - 1].alt)
  //   }
  //   return (
  //     <div className="container">
  //       {images.map((image, index) => (
  //         <div key={index} className="mySlides">
  //           <div className="numbertext">
  //             {index + 1} / {images.length}
  //           </div>
  //           <img src={image} style={{ width: '100%' }} />
  //         </div>
  //       ))}
  //       <a
  //         className="prev"
  //         onClick={() => {
  //           plusSlides(-1)
  //         }}
  //       >
  //         ❮
  //       </a>
  //       <a
  //         className="next"
  //         onClick={() => {
  //           plusSlides(1)
  //         }}
  //       >
  //         ❯
  //       </a>
  //       <div className="caption-container">
  //         <p id="caption" />
  //       </div>
  //       <div className="row">
  //         {images.map((image, index) => (
  //           <div key={index} className="column">
  //             <img
  //               className="demo cursor"
  //               src={image}
  //               style={{ width: '100%' }}
  //               onClick={() => {
  //                 currentSlide(index + 1)
  //               }}
  //               alt={`image ${index + 1}`}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )

  return (
    <div className="container2">
      <input type="radio" name="slider" id="item-1" checked />
      <input type="radio" name="slider" id="item-2" />
      <input type="radio" name="slider" id="item-3" />
      <div className="cards">
        <label className="card" htmlFor="item-1" id="song-1">
          <img
            src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
            alt="song"
          />
        </label>
        <label className="card" htmlFor="item-2" id="song-2">
          <img
            src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="song"
          />
        </label>
        <label className="card" htmlFor="item-3" id="song-3">
          <img
            src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="song"
          />
        </label>
      </div>
      <div className="player">
        <div className="upper-part">
          <div className="play-icon">
            <svg
              width="20"
              height="20"
              fill="#2992dc"
              stroke="#2992dc"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-play"
              viewBox="0 0 24 24"
            >
              <defs />
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
          <div className="info-area" id="test">
            <label className="song-info" id="song-info-1">
              <div className="title">Bunker</div>
              <div className="sub-line">
                <div className="subtitle">Balthazar</div>
                <div className="time">4.05</div>
              </div>
            </label>
            <label className="song-info" id="song-info-2">
              <div className="title">Words Remain</div>
              <div className="sub-line">
                <div className="subtitle">Moderator</div>
                <div className="time">4.05</div>
              </div>
            </label>
            <label className="song-info" id="song-info-3">
              <div className="title">Falling Out</div>
              <div className="sub-line">
                <div className="subtitle">Otzeki</div>
                <div className="time">4.05</div>
              </div>
            </label>
          </div>
        </div>
        <div className="progress-bar">
          <span className="progress"></span>
        </div>
      </div>
    </div>
  )
}
