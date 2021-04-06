const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
};
export default Filter;
