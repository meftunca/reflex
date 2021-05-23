///-@ts-nocheck
import ObjectPath from "object-path";
import * as Yup from "yup";

type inputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type Touched<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? Touched<Values[K][number]>[]
      : boolean
    : Values[K] extends object
    ? Touched<Values[K]>
    : boolean;
};
export type Errors<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? Errors<Values[K][number]>[] | string | string[]
      : string | string[]
    : Values[K] extends object
    ? Errors<Values[K]>
    : string;
};

export default class FormProviderClass<
  T,
  U extends (state: Partial<T>, errors: Errors<T>) => any,
  V extends Yup.ObjectSchema
> {
  private initialState: Partial<T> = {};
  private versionUpdater: U;

  state: Partial<T>;
  errors: Errors<T> = {};
  validator?: V;

  constructor(initialState: Partial<T>, versionUpdater: U, validator?: V) {
    this.initialState = initialState;
    this.state = initialState;
    this.versionUpdater = versionUpdater;
    this.validator = validator;
    this.errors = {};
  }
  private async checkErrors(name: string): Promise<boolean> {
    if (this.validator) {
      try {
        await this.validator.validate(this.state);

        this.errors = {};
        return false;
      } catch (errors) {
        ObjectPath.set(this.errors, name, String(errors));
        return true;
      }
    }
    return false;
  }
  async setField(fieldName: string, value: any) {
    try {
      await ObjectPath.set(this.state, fieldName, value);
      await this.checkErrors(fieldName);
      this.versionUpdater(this.state, this.errors);
    } catch (error) {
      console.error(error);
    }
  }

  getField = (name: string) => ObjectPath.get(this.state, name);
  hasField = (name: string) => ObjectPath.has(this.state, name);
  handleChange = async (e: inputChangeEvent) => {
    const { value, name } = e.currentTarget;
    this.setField(name, value);
  };

  reset() {
    this.state = this.initialState;
    this.errors = {};
    this.versionUpdater(this.state, this.errors);
  }
}
