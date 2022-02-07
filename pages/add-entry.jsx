import AppContext from "@/components/AppContext"
import Button from "@/components/Button"
import FormField from "@/components/FormField"
import Textarea from "@/components/Textarea"
import { amountValidator, descriptionValidator } from "@/validators/validators"
import { Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"

const { default: Page } = require("@/components/Page")

const initialValues = {
  amount: 0,
  description: "",
}
const validationSchema = yup
  .object()
  .shape({
    amount: amountValidator.required(),
    description: descriptionValidator.required(),
  })
  .required()

const AddEntryPage = () => {
  const { addEntry } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    ({ amount, description }, { resetForm }) => {
      addEntry({ amount, description })
      resetForm()
    },
    [addEntry]
  )

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting, isValid, handleSubmit }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-4"
        >
          <FormField name="amount" type="number" />
          <FormField name="description" as={Textarea} />
          <Button type="submit" disabled={isSubmitting || !isValid}>
            ADD
          </Button>
        </form>
      )}
    </Formik>
  )
}

AddEntryPage.getLayout = (page) => <Page title="Add new entry">{page}</Page>

export default AddEntryPage
