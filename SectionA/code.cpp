
#include <bits/stdc++.h>
using namespace std;

class TreeNode{
  public:
  int val;
  int size = 0;
  vector<TreeNode*>childrens;
  
  
  TreeNode(int data){
      this->val = data;
  }
    
};

void addChildrens(TreeNode* root){
    for(int i =0; i<5; i++){
        int num = (rand() %(10000 - 0 + 1)) + 0;
        TreeNode * temp = new TreeNode(num);
        root->childrens.push_back(temp);
    }
}


void createTree(TreeNode* root, int &currSize){
    if(currSize > 10000)return;
    
    addChildrens(root);
    for(int i=0 ;i<5 ; i++){
        createTree(root->childrens[i],++currSize);
    }
}

void levelOrder(TreeNode* root){
    queue<TreeNode*>q;
    q.push(root);
    while(!q.empty()){
        auto node = q.front(); q.pop();
        int size = q.size();
        for(int i = 0; i<size ; i++){
            cout<<node->val<<" ";
        }
        cout<<endl;
        
        for(int i = 0 ;i<node->childrens.size() ; i++){
            q.push(node->childrens[i]);
        }
    }
}

int main()
{
    TreeNode * root = new TreeNode(5);
    int ans = 1;
    createTree(root,ans);
    cout<<root->val<<endl;
    for(int i = 0 ; i<root->childrens.size(); i++){
        cout<<root->childrens[i]->val<<" ";
    }
    levelOrder(root);
    cout<<endl;
}