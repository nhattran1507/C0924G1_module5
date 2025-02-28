import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, getUsersAction } from "../actions/userAction";
import {toast} from "react-toastify";

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);

    const handleGetUsers = () => {
        dispatch(getUsersAction());
    };

    const handleDeleteUser = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa user này không?")) {
            dispatch(deleteUserAction(id));
            toast.success("Xóa Thành Công");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Quản Lý User</h1>
            <button onClick={handleGetUsers}>Get Users</button>
            {loading && <p>Đang tải...</p>}
            {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}
            {users && users.length > 0 ? (
                <table
                    border="1"
                    cellPadding="10"
                    cellSpacing="0"
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                !loading && <p>Không có dữ liệu hiển thị.</p>
            )}
        </div>
    );
};

export default UserList;