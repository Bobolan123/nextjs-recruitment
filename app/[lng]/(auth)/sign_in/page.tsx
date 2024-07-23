import SignInBox from "@/components/_authentication/sign-in";
import Typography from "@mui/material/Typography";

export default function SignIn() {
    // const jwt = getJwt(); // => 'value'

    // if (jwt) {
    //     router.back();
    // }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        "use server";
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");

        if (email && password) {
            const userAcc = {
                username: email.toString(),
                password: password.toString(),
            };
        } else {
            console.error("Email or password is missing");
        }
    };

    return (
        <div className="xl:container md:mx-auto pt-6">
            <div className="mt-3">
                <Typography typography="h5">
                    <b>Welcome to Logan</b>
                </Typography>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="left">
                    <SignInBox handleSubmit={handleSubmit}/>
                </div>

                <div className="right">right</div>
            </div>
        </div>
    );
}
