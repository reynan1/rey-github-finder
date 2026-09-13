import { Link } from "react-router-dom"
import type { IGithubUser } from "../../types/GitUser"

function UserItem(user: IGithubUser) {
  return (
        <div className="card shadow-md compact side bg-base-100" key={user.id}>
          <div className="flex-row items-center space-x-4 card-body">
            <div>
              <div className="avatar">
                  <div className="rounded-full shadow w-14 h-14">
                    <img alt="Profile" src={user.avatar_url} />
                  </div>
              </div>
            </div>
            <div>
              <h2 className="card-title">{user.login}</h2>
              <Link className="text-gray-500 text-opacity-40" to={`/users/${user.login}`}>
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
  )
}

export default UserItem
