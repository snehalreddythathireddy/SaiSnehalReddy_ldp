import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

interface SearchFormProps {
  placeholder: string;
  buttonLabel: string;
  onSearch?: () => void;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchForm = ({
  placeholder,
  buttonLabel,
  onSearch,
  onInputChange,
}: SearchFormProps) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        onChange={onInputChange}
      />

      <Button
        label={buttonLabel}
        onClick={onSearch}
      />
    </div>
  );
};

export default SearchForm;