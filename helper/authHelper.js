import Cookies from 'js-cookie'

export const authenticate = async () => {

    try {
        let jwtoken;
        if (Cookies.get('jwtoken')) {
            jwtoken = Cookies.get('jwtoken');
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/authenticate`, {
            method: 'get',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: jwtoken,
            }
        });

        const data = await res.json();

        if (data == undefined || data.error || data === null) {
            Cookies.remove('jwtoken');
        }

        return data;

    } catch (error) {
        console.log(error)
    }
}