import "./index.css";

interface ButtonProps {
    children: React.ReactNode;
    to: string;
}

const Button: React.FC<ButtonProps> = ({ children, to = "/" }) => {
    return (
        <div>
            <a href={to}>
                <button className="btn">{children}</button>
            </a>
        </div>
    );
};

export default Button;
