import React from "react";
import { H3, STable, STBody, STD, STH, STHead, STHeadTR, STRBodyTR, TableDiv } from "./TableStyles";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { DeleteUser, useFetch } from "../../utils/firebase";


const Table = ({showInForm}) => {

   const {isLoading, contactList} = useFetch()

  return (
    <TableDiv>
      <H3>CONTACT</H3>
    
        <STable>
          <STHead>
            <STHeadTR>
              <STH >#</STH>
              <STH >Name</STH>
              <STH >Phone</STH>
              <STH >
                Edit
              </STH>
            </STHeadTR>
          </STHead>
          <STBody>
          {  isLoading ? (
            <STRBodyTR>
              <STD>Loading</STD>
            </STRBodyTR>
            ) : contactList.lenght === 0 ? (
            <STRBodyTR>
              <STD>No Result Found</STD>
            </STRBodyTR>
            ) : (
            contactList.map((item) => {
             
              return (
                <STRBodyTR key={item.id}>
                  <STD>{item.id} </STD>
                  <STD>{item.username} </STD>
                  <STD>{item.phoneNumber} </STD>
                  <STD>
                    <FaEdit
                      //! alttaki 2 satır bana tıklandığında modal ı aç demek

                      data-bs-toggle="modal"
                      data-bs-target="#edit-modal"
                      size={20}
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() =>
                        showInForm(
                          item.id,
                          item.username,
                          item.phoneNumber,
                          item.gender
                        )
                      }
                    />
                    <AiFillDelete
                      size={22}
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => DeleteUser(item.id)}
                    />
                  </STD>
                </STRBodyTR>
              );
            })
            )}
            
          </STBody>
        </STable>
    
    </TableDiv>
  );
};

export default Table;
