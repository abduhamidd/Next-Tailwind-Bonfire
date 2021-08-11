function ButtonPrimary({children, bg, border, ...props}) {
  return (
    <div>
      <button
        className={` relative z-50 inline-block px-8 py-2  text-black transition-all duration-100 ease-in rounded-md outline-none ${
          border ? 'border-solid border-4 border-white' : ''
        } hover:bg-gray-100 bg-white ${
          bg ? 'bg-grey-400 text-white hover:text-black' : 'bg-white'
        }`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonPrimary;
