import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


export default function List() {
  const users = [
    { id: 1, name: "John Doe", paid: true },
    { id: 2, name: "Jane Smith", paid: false },
    { id: 3, name: "Bob Johnson", paid: true },
    { id: 4, name: "Sarah Lee", paid: false },
    { id: 5, name: "Tom Wilson", paid: true },
  ]
  const togglePaymentStatus = (userId: number) => {
    console.log(`Toggling payment status for user ${userId}`)
  }
  return (
    <div className=" w-full sm:w-full mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">User Payment Status</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between rounded-lg bg-muted p-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${user.paid ? "bg-green-500 text-green-50" : "bg-red-500 text-red-50"
                      }`}
                  >
                    {user.paid ? "Paid" : "Not Paid"}
                  </span>
                  {user.paid ? (
                    <CircleCheckIcon className="h-4 w-4 text-green-500" />
                  ) : (
                    <CircleXIcon className="h-4 w-4 text-red-500" />
                  )}
                </div>
              </div>
            </div>
            {!user.paid && (
              <Button variant="default" onClick={() => togglePaymentStatus(user.id)}>
                Mark as Paid
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CircleCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function CircleXIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}