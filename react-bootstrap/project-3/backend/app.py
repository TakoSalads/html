from flask import Flask, jsonify, request
from data import sample_data

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    # Parse query parameters
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 5))
    search = request.args.get('search', '').lower()
    sort_by = request.args.get('sort_by', 'id')
    sort_order = request.args.get('sort_order', 'asc')

    # Filter data
    filtered = [item for item in sample_data if search in item['message'].lower()]
    
    # Sort data
    filtered.sort(key=lambda x: x[sort_by], reverse=(sort_order == 'desc'))
    
    # Paginate
    start = (page - 1) * per_page
    end = start + per_page
    paginated = filtered[start:end]

    return jsonify({
        "data": paginated,
        "total": len(filtered),
        "page": page,
        "per_page": per_page
    })

if __name__ == '__main__':
    app.run(port=5000, debug=True)