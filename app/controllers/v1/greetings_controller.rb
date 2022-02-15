class V1::GreetingsController < ApplicationController
  def index
    greeting = Greeting.new
    render json: { greetings: [
      {
        id: greeting.greeting.id,
        title: greeting.greeting.title
      }
    ] }.to_json
  end
end
