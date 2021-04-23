import React from "react";
import { useRef, useCallback } from "react";
import { useMemo } from "react";
import IconButton from "../IconButton/IconButton";
import Box from "../Box";
import Chip from "../Chip";
import Divider from "../Divider";
import ListItem from "../List/ListItem";
import Popper from "../Popper";
import TextField, { InputProps } from "../TextField";

type SelectInputProps = Partial<HTMLElement> & {
  onChange?: (...values: any) => void;
  value?: any | any[];
};

type listItemSource = {
  key?: string;
  title: React.ReactNode;
  value: any;
  prefixIcon?: React.ReactNode;
  description?: React.ReactNode;
};

type Props = {
  onChange?: (values: any | any[]) => void;
  value?: any | any[];
  mode?: "single" | "multiple";
  variant?: "auto-complete" | "select";
  previewType?: "text" | "chip";
  renderInput?: (props: SelectInputProps) => React.ReactNode;
  renderValue?: (values: listItemSource, k: number) => React.ReactNode;
  inputProps?: InputProps;
  fieldKeyName?: string;
  renderListItem: (property: listItemSource) => React.ReactNode;
  dataSource: listItemSource[];
  renderSeperator?: React.ReactNode;
};

const Select: React.FC<Props> = ({
  onChange,
  value,
  mode = "single",
  variant = "select",
  previewType = "text",
  renderInput = TextField,
  renderValue = ({ title }) => <Chip label={title} size={5} />,
  inputProps = { variant: "outlined" },
  fieldKeyName = "value",
  children,
  dataSource,
  renderListItem,
  renderSeperator = <Divider spacing={0} />,
}) => {
  const popperRef = useRef<{ open: () => void; close: () => void }>(null);
  const checkControl = useCallback(
    (item: listItemSource) => {
      return (
        (mode === "multiple" &&
          Array.isArray(value) &&
          value.find((a) => a === item.value)) ||
        (mode === "single" && value === item.value)
      );
    },
    [value, dataSource, mode]
  );

  const selectOptionList = useMemo(() => {
    let contentSource: React.ReactNode[] = [];

    for (let dataIndex = 0; dataIndex < dataSource.length; dataIndex++) {
      const {
        key,
        value: optionValue,
        title,
        description,
        prefixIcon,
      } = dataSource[dataIndex];
      const isChecked =
        mode === "multiple" &&
        Array.isArray(value) &&
        checkControl(dataSource[dataIndex]);
      let element = (
        <ListItem
          //@ts-ignore
          title={title}
          description={description}
          leftItem={prefixIcon}
          key={key || dataIndex + ""}
          button
          size={12}
          onClick={() => {
            //@ts-ignore
            onChange(
              mode === "multiple"
                ? isChecked && value.includes(optionValue)
                  ? value.filter((a: any) => a !== optionValue)
                  : [...(value || []), optionValue]
                : optionValue
            );
            popperRef.current?.close();
          }}
          rightItem={
            <span
              className="material-icons"
              css={{
                opacity: isChecked ? 1 : 0,
                transition: "all .2s ease-in-out",
              }}
            >
              done
            </span>
          }
        />
      );
      contentSource.push(element);
      if (dataIndex !== dataSource.length) {
        contentSource.push(renderSeperator);
      }
    }

    return contentSource;
  }, [dataSource, renderListItem, renderSeperator]);

  const renderInputValue = useMemo(() => {
    let inputValue: listItemSource[] = dataSource.filter(checkControl);

    return inputValue.length === 0 ? null : inputValue.map(renderValue);
  }, [value, dataSource]);
  return (
    <Popper popperRef={popperRef} content={selectOptionList} placement="bottom">
      {renderInput &&
        //@ts-ignore
        renderInput({
          onChange,
          value: renderInputValue,
          tag: "button",
          readOnly: true,
          ...inputProps,
          endAdornment: (
            <div css={{ display: "flex", placeItems: "center" }}>
              <IconButton
                size={12}
                //@ts-ignore
                onClick={() => onChange(mode === "multiple" ? [] : null)}
              >
                <span
                  className="material-icons"
                  hidden={
                    mode === "multiple"
                      ? Array.isArray(value) && value.length > 0
                        ? false
                        : true
                      : value !== undefined && value !== null && value !== ""
                      ? false
                      : true
                  }
                >
                  clear
                </span>
              </IconButton>
              <span className="material-icons">arrow_drop_down</span>
            </div>
          ),
        })}
    </Popper>
  );
};

export default Select;
