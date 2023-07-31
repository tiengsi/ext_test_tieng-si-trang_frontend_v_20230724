/* eslint-disable react/prop-types */
const RecordComponent = ({ url, title, description }) => {
  return (
    <div className="relative bg-primary-300 w-[288px] h-[288px] my-6 p-6">
      <div className="bg-gray-800 w-full h-full overflow-hidden relative">
        <img src={url} alt={title} className="object-cover w-full h-full mix-blend-luminosity"/>

        <div className="absolute top-[43%] left-1/2 -translate-y-[43%] -translate-x-1/2 min-w-[240px] text-center">
          <span className="text-primary-300 font-inter text-[25px] leading-[30px] tracking-[.125px] uppercase">{title}</span>
        </div>
        <div className="absolute top-[57%] left-1/2 -translate-y-[57%] -translate-x-1/2 min-w-[160px] min-h-[24px] bg-primary-400 flex items-center justify-center">
          <span className="text-light font-noto text-sm font-light">{description}</span>
        </div>
      </div>
    </div>
  )
}

export default RecordComponent