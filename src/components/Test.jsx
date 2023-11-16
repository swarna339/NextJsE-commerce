import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DownloadIcon, TrashIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Test() {
  return (
    <div>
      {/* Buttons */}
      <Button variant="outline">Button 1</Button>
      <Button variant="destructive">Button 2</Button>
      <Button variant="default">Button 3</Button>
      <Button variant="link">Link 1</Button>
      <Button disabled>Disabled</Button>
      {/* Icon */}
      <Button variant="outline" size="icon">
        <TrashIcon className="h-4 w-4" />
      </Button>
      <Button variant="destructive">
        <TrashIcon className="mr-2 h-4 w-4" /> Delete
      </Button>
      <Button disabled>
        Uploading <DownloadIcon className="ml-2 h-4 w-4 animate-bounce" />
      </Button>
      {/* Link */}
      <Button asChild variant="ghost">
        <Link href="/login">Login</Link>
      </Button>

      {/* Alert */}
      <Alert variant="destructive">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      {/* Card */}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Learn Java Step by Step</CardTitle>
          <CardDescription>Course by Rajesh Kumar</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis, omnis alias harum pariatur illum eveniet molestiae id suscipit aliquam, dolore, sint unde accusantium temporibus nobis cupiditate minus neque iste.
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="destructive">Start Watching</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
