'use client';

export default function RunwayScroll() {
  return (
    <div className="w-full flex justify-center items-center gap-6 p-6">
      
      {/* Left text section */}
      <div className="w-[16cm] h-[19cm] bg-[#192227] rounded-3xl p-5 flex flex-col justify-between">
        
        {/* Card 1 */}
        <div>
          <div className="flex items-center pl-6 border-b-2 border-gray-50/20 p-1 ">
            <div className="h-8 w-8 bg-amber-500 rounded-full mb-2"></div>
          </div>
          <h1 className="text-5xl pl-5 font-bold text-white leading-tight">
            Capture <span className="text-[#B08CE1]"> Anything</span>
          </h1>
          <h2 className="text-lg text-[#F9A600] p-6 pt-4 leading-relaxed">
            Save YouTube Videos, Tweets, Screenshots, Or Random Thoughts In Seconds, We Support Various Content Types
          </h2>
        </div>

        {/* Card 2 */}
        <div>
          <div className="flex items-center pl-6 border-b-2 border-gray-50/20 p-1 mb-4">
            <div className="h-8 w-8 bg-amber-500 rounded-full mb-2"></div>
          </div>
          <h1 className="text-5xl pl-5 font-bold text-white leading-tight ">
            Instant <span className="text-[#ADE988] ">Recall</span>
          </h1>
          <h2 className="text-lg text-white p-6 pt-4 leading-relaxed ">
            Find Anything You've Saved. No More Endless Scrolling Or Forgotten Bookmarks
          </h2>
        </div>

        {/* Card 3 */}
        <div>
          <div className="flex items-center pl-6 border-b-2 border-gray-50/20 p-1 mb-4">
            <div className="h-8 w-8 bg-amber-500 rounded-full mb-2"></div>
          </div>
          <h1 className="text-5xl pl-5 font-bold text-white leading-tight">
            <span className="text-[#2B82B5]">Smarter</span> Organization
          </h1>
          <h2 className="text-lg text-[#ADE988] p-6 pt-4 leading-relaxed">
            Auto-tagging and smart folders keep your digital memories organized without effort.
          </h2>
        </div>
      </div>

      {/* Right video */}
      <div className="w-[23cm] h-[18cm] overflow-hidden rounded-3xl ">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          src="https://cdn.runway.com/marketing-website/product/product-reports.mp4"
        />
      </div>
    </div>
  );
}
