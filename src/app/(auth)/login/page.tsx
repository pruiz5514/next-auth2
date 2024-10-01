import Form from "@/app/components/Form/Form"
import Button from "@/app/components/UI/Button/Button"
import Input from "@/app/components/UI/Input/Input"


const Login = () => {
    return(
        <>
            <main className="flex flex-col items-center py-10">
                <h1 className="text-4xl mb-6">Iniciar sesión</h1>
                <Form >
                    <Input placeholder="Email" type="email" name="email"/>
                    <Input placeholder="Password" type="password" name="password"/>
                    <Button>Iniciar sesión</Button>
                </Form>
            </main>
        </>
    )
}

export default Login