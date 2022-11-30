const PrimaryButton = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="rounded-lg border-2 border-black bg-gray-900 h-12 text-gray-200 uppercase font-bold tracking-wide "
    />
  );
};

export default PrimaryButton;
