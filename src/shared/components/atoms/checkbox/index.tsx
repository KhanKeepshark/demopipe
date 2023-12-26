import { Checkbox as AntCheckbox, CheckboxProps, ConfigProvider } from "antd";
import { FC } from "react";

export const Checkbox: FC<CheckboxProps> = ({ ...rest }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          //   Checkbox: {
          //     colorPrimary: colors.red,
          //     colorPrimaryHover: colors.red,
          //   },
        },
      }}
    >
      <AntCheckbox {...rest} />
    </ConfigProvider>
  );
};
