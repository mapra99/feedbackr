import Form from '@/components/form'
import TextField from '@/components/text-field'
import { Button } from '@/components/button'
import { BotIcon } from "@/icons"

export default function SignUp() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <div className="my-8 mx-6 max-w-lg w-full">
        <Form icon={<BotIcon />}>
          <h1 className="text-xl sm:text-3xl font-sans text-marian-blue w-full mt-5 sm:mt-3 mb-6 sm:mb-10">
            Sign Up
          </h1>

          <div className="flex flex-col w-full gap-6 mb-10 sm:mb-8">
            <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
              First Name
              <TextField id="first_name" name="first_name" placeholder="Jhon" type="text" className="text-xs sm:text-base"/>
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
              Last Name
              <TextField id="last_name" name="last_name" placeholder="Doe" type="text" className="text-xs sm:text-base"/>
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
              Email
              <TextField id="email" name="email" placeholder="email@example.com" type="email" className="text-xs sm:text-base"/>
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-xs font-bold sm:text-lg text-marian-blue">
              Password
              <TextField id="password" name="password" placeholder="********" type="password" className="text-xs sm:text-base"/>
            </label>

            <label className=" flex flex-col gap-2 w-full font-sans text-lg text-marian-blue">
              Confirm your Password
              <TextField id="password_confirmation" name="password_confirmation" placeholder="********" type="password" />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-end">
            <Button type="button" variant="tertiary" className="text-xs !font-bold sm:text-sm">
              Cancel
            </Button>

            <Button type="submit" variant="primary" className="text-xs !font-bold sm:text-sm">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </main>
  )
}
