import Text from "./components/Text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import XIcon from "./assets/icons/X-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "./assets/icons/Spiner.svg?react";
import Icon from "./components/Icon";
import Badge from "./components/Badge";
import Button from "./components/Button";
import ButtonIcon from "./components/ButtonIcon";
import InputText from "./components/InputText";

export default function App() {
  return(
    <>
      <Text as="h1" variant="body-md-bold" className="text-pink-dark">
        Hello World
      </Text>
      <div className="flex gap-1 my-5">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>
      <div className="flex gap-2 my-5">
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>
      <div className="flex gap-2 my-5">
        <Button icon={PlusIcon}>New task</Button>
      </div>
      <div className="flex gap-6 my-5">
        <ButtonIcon icon={TrashIcon} disabled />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>
      <div className="flex gap-6 my-5">
        <InputText />
      </div>
    </>
  ) 
}
