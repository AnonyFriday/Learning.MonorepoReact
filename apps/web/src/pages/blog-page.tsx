export function BlogPage() {
  return (
    <div>
      <section className="relative grid min-h-79 place-items-center overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/common/common-10.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]"></div>
        <div className="relative text-center">
          <h1 className="text-[48px] font-medium text-black">Blog</h1>
          <p className="mt-2 text-base font-normal text-black">Blog Contat</p>
        </div>
      </section>
    </div>
  );
}
