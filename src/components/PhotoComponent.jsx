/* eslint-disable react/prop-types */
const PhotoComponent = ({ url, label }) => {
  return (
    <div className="relative w-[232px] h-[232px] m-1">
      <img src={url} alt={label} loading="lazy" className="object-cover w-full h-full" />
      <div className="absolute bottom-0 left-0 w-[120px] h-8 overflow-hidden bg-primary-300 flex items-center px-2">
        <span className="text-light font-inter text-[15px] leading-[18px] tracking-[.15px]">{label}</span>
      </div>
    </div>
  )
}

export default PhotoComponent