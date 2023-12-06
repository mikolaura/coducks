import { useState } from "react"
export interface FormProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Form = ({ children = 'Form' }: FormProps) => {
    const [firstName, setFirstName] = useState("")
    return (
        <div className="text-center">
            {children}
            <form>
                <label className="text-cyan-500 ">First name:</label>
                <br />
                <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
