export default function Validation(){
      return(
            <>
                  <div className="bg-gray-100 py-24">
                        <div className="max-w-5xl m-auto">
                              <h1>Request Data Validation</h1>
                        </div>
                  </div>
                  <div className="max-w-5xl m-auto py-6">
                        <label htmlFor="work">Are you working?</label>
                        <select id="work">
                              <option value="yes">Yes, I am</option>
                              <option value="yes">Nu uh</option>
                        </select>
                        <div className="flex flex-col max-w-lg gap-3 my-6">
                              <input type="text" placeholder="Your Job"/> 
                              <textarea placeholder="Describe what you do in your job"></textarea>
                              <input type="text" placeholder="Income (Rp.)"/> 
                        </div>
                        <label htmlFor="work">Reason Accepted?</label>
                        <div className="flex flex-col my-6">
                              <textarea placeholder="Explain why you should be accepted"></textarea>
                        </div>
                        <div className="w-40">
                              <button>Send Request</button>
                        </div>
                  </div>
            </>
      )
}