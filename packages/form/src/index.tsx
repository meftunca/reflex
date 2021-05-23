// @ts-nocheck
import React, { createContext, useCallback, useContext, useState } from "react";
import * as Yup from "yup";
import FormProviderClass from "./FormProviderClass";

export const FormContext = createContext<typeof FormProviderClass | null>(null);

export type FormProviderProps = {
  validateSchema?: Yup.ObjectSchema;
  initialState?: Object;
  onChange?: (values: Object, erros?: Object) => any;
  onSubmit?: (values: Object) => any;
  children: (values: typeof FormProviderClass) => React.ReactNode;
};

const FormProvider = ({
  initialState = {},
  validateSchema,
  onChange,
  onSubmit,
  children,
}: FormProviderProps) => {
  const [versionUpdater, setVersionUpdater] = useState(0);
  const onChangeEvent = useCallback(
    (state: any, errors: any) => {
      if (onChange) {
        onChange(state, errors);
      }
      setVersionUpdater((f) => f + 1);
    },
    [onChange]
  );
  const [immutableState, setImmutableState] = useState<FormProviderClass>(
    new FormProviderClass(initialState, onChangeEvent, validateSchema)
  );

  return (
    <FormContext.Provider value={immutableState}>
      <FormContext.Consumer>{children}</FormContext.Consumer>
    </FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
};

export default FormProvider;
