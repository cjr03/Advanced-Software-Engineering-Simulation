# Walmart Advanced Software Engineer Training
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![Python](https://img.shields.io/badge/Python-blue)
![SQLite](https://img.shields.io/badge/SQLite-skyblue)

## Overview
During this program, I completed a job simulation focused on solving technical challenges across Walmart teams. My work included implementing custom data structures, performing data processing with Python and SQLite, and designing UML/ERD diagrams for system architecture and database design.

## Key Projects

### 1. Power-of-Two Max Heap (`PowerOfTwoHeap.js`)
- Implemented a **novel variant of a heap** where each node has `2^k` children instead of 2.
- Supports:
  - `insert(value)` → insert into the heap.
  - `popMax()` → remove and return the maximum value.
  - `isEmpty()` → check if the heap is empty.
- Demonstrates algorithmic problem-solving in JavaScript for Walmart’s shipping department use case.

### 2. Data Munging & Database Connector (`DataMunging.py`)
- Python + SQLite script that:
  - Reads and merges shipping CSV data (`shipping_data_0.csv`, `shipping_data_1.csv`, `shipping_data_2.csv`).
  - Normalizes product and shipment data into relational tables (`product`, `shipment`).
  - Uses helper functions to insert products, manage duplicates, and maintain referential integrity.
- Showcases data engineering and ETL-style processing.

### 3. UML Class Diagram (`UMLDiagram.pdf`)
- Designed a **UML class diagram** for a data processor system.
- Captured:
  - Different operating modes.
  - Database connection handling.
  - Future extensibility for new features.

### 4. Entity Relationship Diagram (ERD) (`ERD.pdf`)
- Designed an ERD for Walmart’s **pet department database**.
- Modeled:
  - Product inventory
  - Suppliers
  - Customers
  - Orders & fulfillment
- Ensured normalization and clear relationships between entities.

## Repository Structure

```plaintext
.
├── PowerOfTwoHeap.js # Custom Power-of-Two Heap implementation (JavaScript)
├── DataMunging.py # CSV ingestion + SQLite connector (Python)
├── UMLDiagram.png # UML class diagram (exported image)
├── ERDDiagram.png # Entity relationship diagram (exported image)
└── README.md # Project documentation
```

## Technologies Used
- **JavaScript (ES6)** → Heap implementation
- **Python 3, SQLite3** → Data munging and database design

## Skills Demonstrated
- Algorithm design & custom data structures
- Python scripting for ETL/data ingestion
- SQL schema design & referential integrity
- UML and ERD diagramming
- Problem-solving in applied engineering contexts
