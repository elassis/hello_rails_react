class Greeting < ApplicationRecord
  def greeting
    id = rand(1..Greeting.count)
    Greeting.find(id)
  end
end
