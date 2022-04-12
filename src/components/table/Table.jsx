

const Table = ({userArray}) => {
  return (
    <table className="table">
            <tbody>
              <tr>
                <th>FIRST NAME</th>
                <th>E-MAIL</th>
                <th>PHONE</th>
                <th>AGE</th>
              </tr>
              
              {userArray?.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
  )
}

export default Table