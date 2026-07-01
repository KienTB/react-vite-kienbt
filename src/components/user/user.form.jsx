import { Input } from 'antd';
import { Button, Flex } from 'antd';
import { useState } from 'react';

const UserForm = () => {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Address, setAddress] = useState("");

    const handleClickBtn = () => {
        console.log(">>> check state: ", { FullName, Email, Password, Address })
    }
    return (
        <div style={{ margin: "20px 0", padding: "20px" }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <span>FullName</span>
                    <Input
                        value={FullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <span>Email</span>
                    <Input
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span>Password</span>
                    <Input.Password
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>Address</span>
                    <Input
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <Button
                        onClick={handleClickBtn}
                        type="primary" >Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;