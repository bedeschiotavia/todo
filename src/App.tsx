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
import InputCheckbox from "./components/InputCheckbox";
import Card from "./components/Card";
import Container from "./components/Container";
import Skeleton from "./components/Skeleton";

export default function App() {
  return(
    <Container>
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
        <Badge loading></Badge>
      </div>
      <div className="flex gap-2 my-5">
        <Button icon={PlusIcon}>New task</Button>
      </div>
      <div className="flex gap-6 my-5">
        <ButtonIcon icon={TrashIcon} disabled />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={TrashIcon} loading />
      </div>
      <div className="flex gap-6 my-5">
        <InputText /> 
        <InputCheckbox />
        <InputCheckbox loading/>
      </div>

      <div>
        <Card size="md">Hello World</Card>
      </div>

      <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
    </Container>
  ) 
}
