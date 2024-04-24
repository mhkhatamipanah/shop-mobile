
import AllCategory from "@/Components/User/Moblie/AllCategory/AllCategory"
import ProfileLogo from "@/Components/User/Moblie/profileLogo/ProfileLogo"

const page = () => {
  return (
    <div className="h-[calc(100vh-53.5px)]">
      <ProfileLogo />
        <AllCategory/>
    </div>
  )
}

export default page