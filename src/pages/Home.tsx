import UserResults from "../components/users/UserResults"
import UserSearch from "../context/github/UserSearch"

function Home() {

  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
