"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function NewOrderForm() {
  const [formData, setFormData] = useState({
    what: "",
    when: "",
    where: "",
    cost: "",
  })

  return (
    <section className="bg-gray-50 rounded-lg p-6 border-2">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">PLACE A NEW ORDER</h2>
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="what" className="text-gray-700">WHAT</Label>
            <Input
              id="what"
              value={formData.what}
              onChange={(e) => setFormData({ ...formData, what: e.target.value })}
              className="bg-white text-gray-700 border-2"
            />
          </div>
          <div>
            <Label htmlFor="when" className="text-gray-700">WHEN</Label>
            <Input
              id="when"
              type="datetime-local"
              value={formData.when}
              onChange={(e) => setFormData({ ...formData, when: e.target.value })}
              className="bg-white text-gray-700 border-2"
            />
          </div>
          <div>
            <Label htmlFor="where" className="text-gray-700">WHERE</Label>
            <Input
              id="where"
              value={formData.where}
              onChange={(e) => setFormData({ ...formData, where: e.target.value })}
              className="bg-white text-gray-700 border-2"
            />
          </div>
          <div>
            <Label htmlFor="cost" className="text-gray-700">COST</Label>
            <Input
              id="cost"
              type="number"
              value={formData.cost}
              onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
              className="bg-white text-gray-700 border-2"
            />
          </div>
        </div>
        <Button className="w-full bg-[#508d4e] hover:bg-[#3f7a3d] text-white">
          PROCEED
        </Button>
      </form>
    </section>
  )
}

