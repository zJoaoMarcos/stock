import { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

export default function Select({ name, children, ...rest}) {
    const selectRef = useRef(null)

    const { fieldName, registerField } = useField(name)

    useEffect(() => {
        registerField({
          ref: selectRef,
          name: fieldName,
          getValue: ref => {
            return ref.current?.value
          },
          setValue: (ref, newValue) => {
            ref.current.value = newValue
          },
          clearValue: ref => {
            ref.current.value = ''
          },
        })
      }, [fieldName, registerField]);

    return (

        <div>

            <select id={fieldName} ref={selectRef} {...rest}>
                {children}
            </select>
        </div>
    )
}