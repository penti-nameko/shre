# apps/server/server.py

from flask import Flask, jsonify, request, abort
from datetime import datetime
import os

# Flaskアプリケーションのインスタンスを作成
app = Flask(__name__)

# ----------------------------------------------------------------------
# 📝 データソースのシミュレーション（通常はデータベースを使用）
# ----------------------------------------------------------------------
# このリストが「データベース」の役割を果たします
items = [
    {"id": 1, "name": "Item A", "description": "最初のサンプルアイテムです。", "created_at": "2024-01-15T10:00:00Z"},
    {"id": 2, "name": "Item B", "description": "2番目のサンプルアイテムです。", "created_at": "2024-01-16T11:00:00Z"},
]
# 次に作成するアイテムに割り当てるID
next_id = 3

# ----------------------------------------------------------------------
# 1. すべてのアイテムを取得するルーティング (GET /api/items)
# ----------------------------------------------------------------------
@app.route('/api/items', methods=['GET'])
def get_items():
    """全アイテムのリストを返します。"""
    # 実際にはここでデータベースからデータを取得します
    return jsonify(items)

# ----------------------------------------------------------------------
# 2. 特定のアイテムを取得するルーティング (GET /api/items/<id>)
# ----------------------------------------------------------------------
@app.route('/api/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    """ルートパラメータで指定されたIDのアイテムを返します。"""
    
    # リスト内包表記と next() を使用してアイテムを検索
    item = next((i for i in items if i["id"] == item_id), None)
    
    if item is None:
        # アイテムが見つからない場合は 404 Not Found を返す
        # abort() を使用すると、後述の errorhandler に処理が渡ります
        abort(404, description=f"Item with ID {item_id} not found")
    
    return jsonify(item)

# ----------------------------------------------------------------------
# 3. 新規アイテムを作成するルーティング (POST /api/items)
# ----------------------------------------------------------------------
@app.route('/api/items', methods=['POST'])
def create_item():
    """リクエストボディのJSONデータから新規アイテムを作成します。"""
    
    # リクエストのJSONボディを取得
    request_data = request.get_json()
    
    # 'name' フィールドが必須であるかを確認
    if not request_data or 'name' not in request_data:
        # 必要なフィールドがない場合は 400 Bad Request を返す
        abort(400, description="Missing 'name' field in request body or invalid JSON format")

    global next_id
    
    # 新規アイテムオブジェクトを作成し、IDを割り当て
    new_item = {
        "id": next_id,
        "name": request_data['name'],
        # descriptionはオプションとし、提供されていなければ空文字列
        "description": request_data.get('description', ''),
        "created_at": datetime.now().isoformat() + 'Z'
    }

    # データソース（リスト）に追加
    items.append(new_item)
    next_id += 1

    # 201 Created ステータスコードと共に新規アイテムを返す
    return jsonify(new_item), 201

# ----------------------------------------------------------------------
# 4. エラーハンドリングの定義
# ----------------------------------------------------------------------

# 404 (Not Found) エラー発生時の処理
@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'error': 'Not Found',
        'message': error.description
    }), 404

# 400 (Bad Request) エラー発生時の処理
@app.errorhandler(400)
def bad_request(error):
    return jsonify({
        'error': 'Bad Request',
        'message': error.description
    }), 400

# ----------------------------------------------------------------------
# サーバーの起動
# ----------------------------------------------------------------------
if __name__ == '__main__':
    # 環境変数PORTがあればそれを使用、なければ5000
    port = int(os.environ.get('PORT', 5000))
    # host='0.0.0.0' は外部からの接続を許可するためによく使われます
    # debug=True は開発中にコードを変更した際に自動で再起動するために便利です
    app.run(host='0.0.0.0', port=port, debug=True)