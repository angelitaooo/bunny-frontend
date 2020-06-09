import React from 'react';
import LinkInline from './LinkInline';

const UsersTable = ({ users }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                >
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                    <LinkInline to={`/users/${user.id}`}>
                      {user.name}
                    </LinkInline>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <LinkInline to={`/users/${user.id}/edit`}>Edit</LinkInline>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <LinkInline to={`/users/${user.id}/delete`}>
                      Delete
                    </LinkInline>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
