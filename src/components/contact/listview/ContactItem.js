import React from 'react'
import Image from "react-bootstrap/Image";

function ContactItem({datum,index}) {
  return (
    <tr key={datum.login.uuid}>
              <td>{index}</td>
              <td>
                <Image
                  className="rounded-circle"
                  src={datum.picture.thumbnail}
                />
              </td>
              <td>{datum.name.first}</td>
              <td>{datum.name.last}</td>
              <td>{datum.email}</td>
            </tr>
  )
}

export default ContactItem