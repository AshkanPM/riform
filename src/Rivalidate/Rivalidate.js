import { Map } from 'immutable'

class Rivalidate {
    constructor(validations) {
        this.validations = validations
    }

    validate = (formObject, isSubmit) => {
        let validationObject = this.valid().getIn(['validation'])
        validationObject = validationObject.setIn(['isValid'], true)

        this.validations.forEach(rule => {
            const rawValue = formObject.getIn(rule.field)
            const rawValidation = validationObject.getIn(rule.field)

            if (!rawValidation.isInvalid &&
                (rawValue !== undefined || isSubmit)) {
                const value = rawValue
                const args = rule.args || []
                const check = rule.method

                if (check(value, ...args, formObject) !== rule.validWhen) {
                    validationObject = validationObject.setIn(
                        rule.field,
                        Map({ isInvalid: true, message: rule.message })
                    )
                    validationObject = validationObject.setIn(['isValid'], false)
                }
            }
        })

        return validationObject
    }

    // Creates a valid validationObject
    valid() {
        let validation = Map({})

        this.validations.forEach(rule => {
            validation = validation.setIn(rule.field, Map({ isInvalid: false, message: '' }))
        });

        return Map({ isValid: true, validation });
    }
}

export const validObject = Map({ isValid: true })

export default Rivalidate