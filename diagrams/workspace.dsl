workspace "Databús" "The workhorse of data transfer" {

    model {
        app = softwareSystem "Mobile app"
        server = softwareSystem "Databús" "Real-Time Transit Data" {
            api = container "API REST" "Provides real-time transit data" "Node.js"
            db = container "Database" "Stores transit data" "PostgreSQL"
            api -> db "Reads from and writes to"
        }

        app -> server "Sends control signals to" "API REST"
    }

    views {
        systemContext app "Diagram1" {
            include *
            autoLayout tb
        }
        container server "Diagram2" {
            include *
            autoLayout tb
        }
    }
    
}
