"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function UserInformation() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    address: "123 Main Street\nApt 4B\nNew York, NY 10001",
    companyName: "Acme Corporation",
    employeeId: "EMP-12345",
  })

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save the data to your backend
  }

  return (
    <Card className="p-6 h-full border bg-gray-50">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">YOUR INFORMATION</h2>
      <div className="space-y-6">
        <section className="space-y-4">
          {isEditing ? (
            <>
              <div>
                <Label>Name</Label>
                <Input
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  className="border-2 text-gray-700"
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  className="border-2 text-gray-700"
                />
              </div>
              <div>
                <Label>Phone</Label>
                <Input
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  className="border-2 text-gray-700"
                />
              </div>
              <div>
                <Label>Address</Label>
                <Textarea
                  value={userData.address}
                  onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                  rows={4}
                  className="border-2 text-gray-700"
                />
              </div>
              <div>
                <Label>Company Name</Label>
                <Input
                  value={userData.companyName}
                  onChange={(e) => setUserData({ ...userData, companyName: e.target.value })}
                  className="border-2 text-gray-700"
                />
              </div>
              <div>
                <Label>Employee ID</Label>
                <Input
                  value={userData.employeeId}
                  onChange={(e) => setUserData({ ...userData, employeeId: e.target.value })}
                  className="border-2 text-gray-700"
                />
              </div>
            </>
          ) : (
            <>
              <InfoField label="Name" value={userData.name} />
              <InfoField label="Email" value={userData.email} />
              <InfoField label="Phone" value={userData.phone} />
              <InfoField label="Address" value={userData.address} />
              <InfoField label="Company Name" value={userData.companyName} />
              <InfoField label="Employee ID" value={userData.employeeId} />
            </>
          )}
        </section>

        <div className="flex gap-2 pt-4">
          {isEditing ? (
            <>
              <Button className="flex-1 border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                CANCEL
              </Button>
              <Button className="flex-1 bg-[#508D4E] hover:bg-[#3f7a3d] text-white" onClick={handleSave}>
                SAVE
              </Button>
            </>
          ) : (
            <Button
              className="w-full bg-[#508D4E] hover:bg-[#3f7a3d] text-white"
              onClick={() => setIsEditing(true)}
            >
              EDIT
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <Label className="text-gray-600">{label}</Label>
      <p className="text-sm whitespace-pre-line text-gray-700">{value}</p>
    </div>
  )
}

