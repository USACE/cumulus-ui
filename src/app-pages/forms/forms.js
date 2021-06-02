const inputLabelLeft = (props) => {
  <label
    className='block sm:inline-block mt-6 sm:mr-5 mb-2 w-full bg-yellow-700 sm:bg-green-50 sm:w-32'
    forhtml={props.id}
  >
    <span className='text-gray-700'>{props.name}</span>
  </label>;
  <input
    className='border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
    value={props.value}
  />;
};

export default { inputLabelLeft };
