import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const performers = [
  {
    id: 1,
    image: "/user-1.jpg",
    user: "Sunil Joshi",
    job: "Web Designer",
    project: "Elite Admin",
    priority: "Low",
    color: "text-[#5d87ff]",
    budget: 3.9
  },
  {
    id: 2,
    image: "/user-2.jpg",
    user: "John Deo",
    job: "Web Developer",
    project: "Flexy Admin",
    priority: "Medium",
    color: "text-[#ffae1f]",
    budget: 24.5
  },
  {
    id: 3,
    image: "/user-3.jpg",
    user: "Nirav Joshi",
    job: "Web Manager",
    project: "Material Pro",
    priority: "High",
    color: "text-[#539bff]",
    budget: 12.8
  },
  {
    id: 4,
    image: "/user-4.jpg",
    user: "Yuvraj Sheth",
    job: "Project Manager",
    project: "Xtreme Admin",
    priority: "Low",
    color: "text-[#13deb9]",
    budget: 4.8
  },
  {
    id: 5,
    image: "/user-5.jpg",
    user: "Micheal Doe",
    job: "Content Writer",
    project: "Helping Hands WP Theme",
    priority: "High",
    color: "text-[#fa896b]",
    budget: 9.3
  },

]

const TopPerformersComponents = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">Top Performers</CardTitle>
        <CardDescription>
          Best Employees
        </CardDescription>
      </CardHeader>
      <CardContent>

        <Table className=" mx-auto" >

          <TableHeader>
            <TableRow className="font-bold">
              <TableHead className="text-gray-900 dark:text-gray-500" >Assigned</TableHead>
              <TableHead className="text-gray-900 dark:text-gray-500">Project</TableHead>
              <TableHead className="text-gray-900 dark:text-gray-500">Priority	</TableHead>
              <TableHead className="text-start text-gray-900 dark:text-gray-500">Budget</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {performers.map((i) => (
              <TableRow key={i.id}>
                <TableCell className="flex gap-x-2">
                  <img src={i.image} className="h-10 w-10 rounded-full" />
                  <span>
                    <h6>{i.user}</h6>
                    <p className="text-xs dark:text-gray-500">{i.job}</p>
                  </span>
                </TableCell>
                <TableCell className="dark:text-gray-500">{i.project}</TableCell>
                <TableCell>
                  <Badge className={`w-20 bg-[#5d87ff1a] ${i.color} text-sm `}>{i.priority}</Badge>
                </TableCell>
                <TableCell className="text-start w-[82px] dark:text-gray-500">
                  $<span>{i.budget}</span>K
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </CardContent>
    </Card>
  )
}

export default TopPerformersComponents;