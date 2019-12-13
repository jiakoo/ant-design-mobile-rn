export interface SwitchPropsType {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  color?: object;
  name?: string;
  onPress?: (checked?: boolean) => void;
}
